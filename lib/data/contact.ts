import { ContactCardData } from "@/lib/type/contact";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export const items: ContactCardData[] = [
  {
    items: [
      {
        label: "Email",
        name: "",
        value: "mailto:jatindersandhuinfo@gmail.com",
        SvgIcon: SiGmail,
        color: "#D14836",
      },
      {
        label: "Linkedin",
        name: "",
        value: "https://www.linkedin.com/in/jatindersandhuinfo",
        SvgIcon: CiLinkedin,
        color: "#0A66C2",
      },
      {
        label: "Teams",
        name: "",
        value: "https://teams.microsoft.com/l/chat/0/0?users=jatindersandhuinfo@gmail.com",
        SvgIcon: BsMicrosoftTeams,
        color: "#464EB8",
      },
      {
        label: "Discord",
        name: "",
        value: "https://discord.gg/w7VjgHAA",
        SvgIcon: FaDiscord,
        color: "#5865F2",
      },
      {
        label: "Telegram",
        name: "",
        value: "https://t.me/jatindersandhuinfo",
        SvgIcon: FaTelegram,
        color: "#229ED9",
      },
      {
        label: "Phone",
        value: "tel:+919888360667",
        SvgIcon: FaPhoneVolume,
        color: "#34A853",
      },
      {
        label: "Whatsapp",
        name: "",
        value: "https://wa.me/9888360667",
        SvgIcon: IoLogoWhatsapp,
        color: "#25D366",
      },
    ],
  },
];