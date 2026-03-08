require('dotenv').config();
require('isomorphic-fetch');
const express = require('express');
const cors = require('cors');
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

const app = express();
const PORT = process.env.PORT || 4091;

// Middleware
app.use(cors({
  origin: ['https://shafrah.qa', 'http://localhost:5173'],
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// Initialize Microsoft Graph Client
const credential = new ClientSecretCredential(
  process.env.AZURE_TENANT_ID,
  process.env.AZURE_CLIENT_ID,
  process.env.AZURE_CLIENT_SECRET
);

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ['https://graph.microsoft.com/.default']
});

const graphClient = Client.initWithMiddleware({ authProvider });

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Email API is running (Microsoft Graph)' });
});

// Contact form endpoint
app.post('/send', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Email to admin
    const adminMail = {
      message: {
        from: {
          emailAddress: {
            name: 'Shafrah Website',
            address: process.env.SENDER_EMAIL
          }
        },
        subject: `[Website Contact] ${subject}`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; text-align: center;">
                <h1 style="color: #f5a623; margin: 0;">New Contact Form Submission</h1>
              </div>
              <div style="padding: 30px; background: #f8fafc;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Name:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Subject:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subject}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px;">
                  <h3 style="color: #64748b; margin-bottom: 12px;">Message:</h3>
                  <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <p style="color: #0f172a; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
              </div>
              <div style="background: #0f172a; padding: 20px; text-align: center;">
                <p style="color: #64748b; margin: 0; font-size: 14px;">This email was sent from the contact form on shafrah.qa</p>
              </div>
            </div>
          `
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.RECIPIENT_EMAIL
            }
          }
        ],
        replyTo: [
          {
            emailAddress: {
              address: email
            }
          }
        ]
      },
      saveToSentItems: true
    };

    // Send email to admin
    await graphClient
      .api(`/users/${process.env.SENDER_EMAIL}/sendMail`)
      .post(adminMail);

    // Auto-reply to user
    const autoReply = {
      message: {
        from: {
          emailAddress: {
            name: 'Shafrah | شفرة',
            address: process.env.SENDER_EMAIL
          }
        },
        subject: 'Thank you for contacting Shafrah | شكراً لتواصلك مع شفرة',
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; text-align: center;">
                <h1 style="color: #f5a623; margin: 0;">Thank You! | شكراً لك</h1>
              </div>
              <div style="padding: 30px; background: #f8fafc;">
                <p style="color: #0f172a; line-height: 1.8; font-size: 16px;">
                  Dear ${name},<br><br>
                  Thank you for reaching out to Shafrah. We have received your message and will get back to you within 24-48 hours.
                  <br><br>
                  عزيزي ${name}،<br><br>
                  شكراً لتواصلك مع شفرة. لقد استلمنا رسالتك وسنرد عليك خلال 24-48 ساعة.
                </p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
                <p style="color: #64748b; font-size: 14px;">
                  Best regards,<br>
                  <strong style="color: #f5a623;">Shafrah Team | فريق شفرة</strong>
                </p>
              </div>
              <div style="background: #0f172a; padding: 20px; text-align: center;">
                <p style="color: #64748b; margin: 0; font-size: 14px;">
                  <a href="https://shafrah.qa" style="color: #f5a623;">shafrah.qa</a> |
                  <a href="mailto:info@shafrah.qa" style="color: #60a5fa;">info@shafrah.qa</a>
                </p>
              </div>
            </div>
          `
        },
        toRecipients: [
          {
            emailAddress: {
              address: email
            }
          }
        ]
      },
      saveToSentItems: true
    };

    await graphClient
      .api(`/users/${process.env.SENDER_EMAIL}/sendMail`)
      .post(autoReply);

    res.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email API running on port ${PORT}`);
});
