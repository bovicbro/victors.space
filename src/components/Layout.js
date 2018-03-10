import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import store from "../store"

export default class Layout extends React.Component {
  render() {
    const title = "big title"
    return (
      <div>
      <Header title={title} />
      <Footer />
      </div>
    )
  }
}

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})
