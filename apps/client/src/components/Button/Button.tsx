import { AppColour } from "@/types/app.enums"
import type { ButtonComponentProps } from "../types/components.interfaces"

export const Button = ({ label, backgroundColor = AppColour.PRIMARY, color = AppColour.BLACK  }: ButtonComponentProps) => {
  return (
    <button style={{ backgroundColor, color }}>{label}</button>
  )
}