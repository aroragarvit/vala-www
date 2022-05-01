import classNames from 'classnames'

import Button, { IButton } from './Button'
import styles from './ContainedButton.module.scss'

const ContainedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={classNames(styles.containedButton, className)}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default ContainedButton