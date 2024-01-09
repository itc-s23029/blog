import Haed from 'next/head'

const Meta = ({ pageTitle }) => {
  return (
    <Haed>
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
    </Haed>
  )
}

export default Meta
