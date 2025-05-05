
import * as React from "react"

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        height: "80px",
        marginBottom: "0.5rem",
        boxSizing: "border-box"
      }}
      {...props}
    />
  )
}
