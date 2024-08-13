import React from 'react'

interface DividerProps {
  color?: string
  height?: string
  width?: string
}

export const Divider: React.FC<DividerProps> = ({
  color = '#fff',
  height = '24px',
  width = '2px',
}) => {
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: color,
        height: height,
        width: width,
        margin: '0 8px', // 间隔符号前后的间距
      }}
    />
  )
}
