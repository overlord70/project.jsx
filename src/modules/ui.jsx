const now = new Date()

export default function Header() {
    return(
      <header>
        <p>logo</p>
        <p>account</p>
        <p>{now.toLocaleTimeString()}</p>
      </header>
    )
  }