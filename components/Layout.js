import Header from "./Header"
import MovieModal from "./MovieModal"

export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>{children}</main>

      {/* Modal */}
      {/* <MovieModal /> */}
    </div>
  )
}
