export default function Divider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', opacity: 0.6 }}>
      <svg width="150" height="20" viewBox="0 0 150 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75 10C50 10 25 15 0 20C25 5 50 0 75 0C100 0 125 5 150 20C125 15 100 10 75 10Z" fill="var(--color-blue)"/>
        <circle cx="75" cy="10" r="4" fill="var(--color-gold)"/>
      </svg>
    </div>
  )
}
