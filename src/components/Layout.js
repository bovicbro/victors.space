import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"

export default class Layout extends React.Component {
  render() {
    const title = "big title"
    return (
      <div>
      <Header title={title} />
      <Button  />
      <Footer />
      </div>
    )
  }
}
