import nodemailer from "nodemailer";

export async function POST(req: Request) {

  const body = await req.json();

  const { name, email, message } = body;


  const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

  });


  try {

    await transporter.sendMail({

      from: email,

      to: process.env.EMAIL_USER,

      subject: "New Contact Form Message",

      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `

    });


    return Response.json({
      message: "Message sent successfully 🚀"
    });


  } catch (error) {

    return Response.json({
      message: "Something went wrong ❌"
    });

  }

}