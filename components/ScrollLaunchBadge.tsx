export default function ScrollLaunchBadge() {
  return (
    <div className="flex justify-center pt-8">
      <a
        href="https://www.scrolllaunch.com/products/fusion-calling?ref=badge"
        target="_blank"
        rel="noopener"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.scrolllaunch.com/api/badge/fusion-calling"
          alt="Featured on ScrollLaunch"
          width={220}
          height={48}
          loading="lazy"
        />
      </a>
    </div>
  );
}
