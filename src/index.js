
export default async (paths=[], debug=false) => {
  let first

  for (const p of paths) {
    try { 
      first = (await import(p)).default 
      debug && console.log(`$import via "${p}"`)
      break
    }catch(e){}
  }

  !first && debug && console.log(`$import failed"`)
  
  return first
}