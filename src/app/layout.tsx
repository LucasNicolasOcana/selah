import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Great_Vibes, Montserrat, Play, Rouge_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const play = Play({
  variable: "--font-play",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const rougeScript = Rouge_Script({
  variable: "--font-rouge-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selah - El descanso que tu cuerpo necesita",
  description: "Masajes profesionales en Rosario, Santa Fe. Cecilia, masajista certificada con 3 años de experiencia. Masajes relajantes, descontracturantes, reductores, drenaje linfático y más. Reserva tu turno por WhatsApp.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${montserrat.variable} ${play.variable} ${rougeScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
