export const contactData = {
  title: "Get In Touch",
  description:
    "Feel free to reach out if you want to collaborate with me, or simply have a chat.",
  email: "lexuanhoangx3@gmail.com",
  phone: "+84 389 530 320",
  location: "Phu Xuan, Hue, Vietnam",
  socialLinks: [
    {
      id: 1,
      name: "Email",
      icon: "email",
      url: "lexuanhoangx3@gmail.com",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/ho%C3%A0ng-l%C3%AA-7932451bb/",
    },
    {
      id: 3,
      name: "GitHub",
      icon: "github",
      url: "https://github.com/hoangitusk20",
    },
  ],
  formFields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      id: "subject",
      type: "text",
      label: "Subject",
      placeholder: "Enter subject",
      required: true,
    },
    {
      id: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
    },
  ],
};
