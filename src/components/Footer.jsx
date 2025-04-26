import data from "/src/data/home";

function Footer() {
  const footer = data.footer

  return (
    <div className="pt-5 flex justify-end h-25">
      <hr className="absolute left-1/2 -translate-x-1/2 w-[75%]"></hr>
      <p className="absolute pt-3 pr-[13%] text-caption text-primary">
        © {footer.year}{' '}
        <a
          href={footer.url}
          target="_blank"
          rel="noopener noreferrer" 
          className="underline"
        >
          {footer.website}
        </a>{' '}
        by {footer.author}
      </p>
    </div>
  );
}

export default Footer;
