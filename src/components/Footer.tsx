const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-semibold">Talent North</p>
        <p className="text-secondary-foreground/60">
          © {new Date().getFullYear()} Talent North. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
