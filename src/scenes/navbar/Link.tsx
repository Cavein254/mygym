import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    Page:string
};

const Link = ({Page}:Props) => {
  return (
    <AnchorLink>
        {Page}
    </AnchorLink>
  )
}

export default Link
