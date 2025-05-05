
import * as React from "react"

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#1d4ed8",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "0.5rem"
      }}
      {...props}
    >
      {children}
    </button>
  )
}
