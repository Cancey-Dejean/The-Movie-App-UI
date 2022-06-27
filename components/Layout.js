import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
    </div>
  )
}
