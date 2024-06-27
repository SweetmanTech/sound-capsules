export const metadata = {
  title: "Sound Capsules",
  description: "A simple audio player for creating token bound playlists",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
