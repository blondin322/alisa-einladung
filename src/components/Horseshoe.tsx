/** Same silhouette as icons8-horseshoe-50.png (open top). Color via currentColor. */
export function Horseshoe({ className }: { className?: string }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-block',
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${import.meta.env.BASE_URL}horseshoe.png)`,
        maskImage: `url(${import.meta.env.BASE_URL}horseshoe.png)`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  )
}
