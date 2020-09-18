import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <span className={styles.test}>Example Component: {text}</span>
}
