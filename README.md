# Events & Office Consultants Website

## Contact Form Email Setup

The contact form is configured to send emails using [Resend](https://resend.com), a modern email API.

### Setting up Resend:

1. Create an account at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Update the `.env.local` file with your Resend API key:

   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. For production use:
   - Verify your domain in the Resend dashboard
   - Update the "from" email address in `app/api/contact/route.ts` to use your verified domain

The contact form is set up to send emails to `leo@leo.dev`. You can change this to your preferred email address in the `app/api/contact/route.ts` file.

### Benefits of using Resend:

- Much higher deliverability rates than traditional SMTP
- Easy setup with no SMTP configuration required
- Built-in analytics and tracking
- No need to worry about email provider limits or spam filters
- Modern API designed for developers

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```
