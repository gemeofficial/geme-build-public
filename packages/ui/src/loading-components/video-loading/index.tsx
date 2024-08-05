import clsx from 'clsx'
import styles from './styles.module.css'

export function VideoLoading({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-black flex items-center justify-center',
        className,
      )}
    >
      <div className={styles.loader}></div>
    </div>
  )
}
