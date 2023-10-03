const Nav = () => {
  const links = [
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-[70px] px-10">
      <h1 className="text-[30px] font-bold">Scp</h1>

      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.title}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
