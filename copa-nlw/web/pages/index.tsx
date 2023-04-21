export default function Home() {


  return (
    <h1>Olá NLW</h1>
  )
}

export const getServerSidePropos = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {}
  }
  
}


  // fetch("http://localhost:3333/pools/count")
  //   .then(res => res.json())
  //   .then( data => {
  //     console.log(data)
  //   })