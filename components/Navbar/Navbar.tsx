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
      {/** Desktop Navigation */}
      <div className={styles.wrapper}>
        <div className={styles.navLeft}>
          <Button className={styles.menu} title="Menu">
            <GiHamburgerMenu className={styles.icon}></GiHamburgerMenu>
          </Button>
          <Link href="/" className={styles.logo}>
            <img src="/images/theathletics.svg" alt="the athletics logo" />
          </Link>
          <div className={styles.divider}></div>
          {/* <div className={styles.searchContainer}>
            <Search onSearchResults={onSearchResult} />
          </div> */}
        </div>
        <div className={styles.navRight}>
          <Button>
            <a href="#" className={styles.subscribe}>
              Subscribe for $2
            </a>
          </Button>
          <Button className={styles.user}>You</Button>
          <Button className={styles.formEnd} type="submit" title="Search">
            <LuSearch className={styles.icon} />
          </Button>
        </div>
      </div>

      {/* <div className={styles.navbarTop}>
        <GiHamburgerMenu />
        The Athletic
        <div className={styles.divider}></div>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title} className={styles.navLink}>
            {link.title}
          </Link>
        ))}
        <button>Subscribe for $2</button>
        <div>
          You <BiChevronDown />
        </div>
        <LuSearch />
      </div>
      <div className={styles.navbarBottom}></div> */}

      {/* <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href={'/profile'}>
              <Image
                src={session?.user?.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}

      {/** Mobile Navigation */}
      {/* <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={'/profile'}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={'/create-prompt'}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="black_btn mt-5 w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
