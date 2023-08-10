'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { navLinks } from '@/constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';
import { LuSearch } from 'react-icons/lu';

const Navbar = () => {
  //   const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  //   useEffect(() => {
  //     const fetchProviders = async () => {
  //       const providers = await getProviders();
  //       setProviders(providers);
  //     };

  //     fetchProviders();
  //   }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.wrapper}>
          <div className={styles.navLeft}>
            <Button className={`${styles.menu} ${styles.button}`} title="Menu">
              <GiHamburgerMenu className={styles.icon}></GiHamburgerMenu>
            </Button>
            <Link href="/">
              <Image
                src="/images/theathletics.svg"
                alt="the athletics logo"
                width={144}
                height={64}
              />
            </Link>
            <div className={styles.divider}></div>
            {/* <div className={styles.searchContainer}>
            <Search onSearchResults={onSearchResult} />
          </div> */}
          </div>
          <div className={styles.navRight}>
            <Button className={styles.button}>
              <a href="#" className={styles.subscribe}>
                Subscribe for $2
              </a>
            </Button>
            <Button className={`${styles.user} ${styles.button}`}>You</Button>
            <Button
              className={`${styles.formEnd} ${styles.button}`}
              type="submit"
              title="Search"
            >
              <LuSearch className={styles.icon} />
            </Button>
          </div>
        </div>
        {/* <div className={styles.userNav}></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
