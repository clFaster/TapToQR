import Link from "next/link";
import Image from "next/image";

interface BrowserStoreInfo {
  name: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
}

const browserStores: Record<string, BrowserStoreInfo> = {
  firefox: {
    name: "Firefox",
    url: "https://addons.mozilla.org/addon/taptoqr/",
    imageSrc: "/store/get-the-addon-fx-apr-2020.svg",
    imageAlt: "Get TapToQR for Firefox",
  },
  chrome: {
    name: "Chrome",
    url: "https://chromewebstore.google.com/detail/taptoqr/ommdikomjapdndpedljobeecepeopjmp",
    imageSrc: "/store/chrome-web-store.svg",
    imageAlt: "Get TapToQR for Chrome",
  },
  edge: {
    name: "Edge",
    url: "https://microsoftedge.microsoft.com/addons/detail/taptoqr/bkfofjhemmkeekmaimpgbndkddmknbga",
    imageSrc: "/store/microsoft-store-en-us-light.svg",
    imageAlt: "Get TapToQR for Edge",
  },
};

export function BrowserStoreLink({
  showAll = false,
  buttonStyle = false,
  browser = "chrome",
}: {
  showAll?: boolean;
  buttonStyle?: boolean;
  browser?: keyof typeof browserStores;
}) {
  const selectedStore = browserStores[browser] ?? browserStores.chrome;

  if (buttonStyle) {
    const store = selectedStore;
    return (
      <Link
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center px-4 py-2 text-sm font-bold bg-primary hover:bg-primary/90 text-white rounded-md transition-colors relative"
      >
        <span className="inline-flex items-center">
          Get Extension
          <span className="ml-2 text-xs bg-white px-1.5 py-0.5 rounded text-primary transition-colors">
            {store.name}
          </span>
        </span>
      </Link>
    );
  }

  if (showAll) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        {Object.entries(browserStores).map(([key, store]) => (
          <Link
            key={key}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 relative p-1"
          >
            <div className="relative rounded-md overflow-hidden p-2">
              <Image
                src={store.imageSrc}
                alt={store.imageAlt}
                width={172}
                height={60}
                loading="eager"
                fetchPriority="high"
                className="h-[60px] w-auto"
                style={{ width: "auto" }}
              />
            </div>
          </Link>
        ))}
      </div>
    );
  }

  const store = selectedStore;

  return (
    <div className="flex items-center justify-center mt-8">
      <Link
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105 relative p-1"
      >
        <div className="relative rounded-md overflow-hidden bg-primary/5 border border-primary/20 p-2">
          <Image
            src={store.imageSrc}
            alt={store.imageAlt}
            width={172}
            height={60}
            loading="eager"
            fetchPriority="high"
            className="h-[60px] w-auto"
            style={{ width: "auto" }}
          />
        </div>
      </Link>
    </div>
  );
}
