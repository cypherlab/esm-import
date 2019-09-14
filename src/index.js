const log = console.log

export default async (paths=[], debug=false) => {
  let first

  for (const p of paths) {
    let status = `import "${p}"`
    try { 
      first = (await import(p)).default 
      debug && log(`${status} - ok`)
      break
    }catch(e){ 
      debug && log(`${status} - failed`)
    }    
  }

  return first
}