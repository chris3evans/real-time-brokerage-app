
import type { ButtonComponentProps } from "@components-types/components.interfaces";
import styles from './Button.module.scss';

export const Button = ({ label  }: ButtonComponentProps) => {
  return (
    <button className={styles['button'] + 'outline'}>{label}</button>
  )
}