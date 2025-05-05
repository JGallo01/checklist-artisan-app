
import * as React from "react"

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        marginBottom: "0.5rem",
        boxSizing: "border-box"
      }}
      {...props}
    />
  )
}
