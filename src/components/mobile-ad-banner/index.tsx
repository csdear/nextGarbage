import { FC } from "react";
import styles from "./mobile-ad-banner.module.scss";
import Image from "next/image";
import Link from "next/link";

const MobileAdBanner: FC = () => {
  return (
    <div
      className={styles["mobile-ad-banner"]}
      data-testid={"mobile-ad-banner"}
    >
      <div className={styles["mobile-ad-banner__right-content"]}>
        <div className={styles["mobile-ad-banner__image"]}>
          <Image
            priority
            src="/static/adBannerTilt.png"
            alt="Angled marketing image view of flipster magazines"
            width={489}
            height={180}
          />
        </div>
      </div>

      <div className={styles["mobile-ad-banner__left-content"]}>
        <div className={styles["mobile-ad-banner__heading"]}>
          <h1>Get the Flipster app today.</h1>
        </div>
        <div className={styles["mobile-ad-banner__sub-heading"]}>
          <h2>
            Explore, download and read magazines any time on your mobile
            devices.
          </h2>
        </div>

        <div className={styles["mobile-ad-banner__store-links"]}>
          <div>
            <Link href="AppStore.com">
              <a
                className={styles["mobile-ad-banner__app-store-link"]}
                data-auto="app-store-link"
              >
                <Image
                  priority
                  src="/static/app-store-logo-stub.png"
                  alt="Apple App Store Image Link"
                  width={105}
                  height={36}
                />
              </a>
            </Link>
          </div>

          <div>
            <Link href="GooglePlay Store.com">
              <a
                className={styles["mobile-ad-banner__gplay-store-link"]}
                data-auto="google-play-store-link"
              >
                <Image
                  priority
                  src="/static/g_app-store-logo-stub.png"
                  alt="Google Play Store Image Link"
                  width={105}
                  height={36}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAdBanner;
