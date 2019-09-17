const log = console.log

export default async (paths=[], module, debug=false) => {
  if(typeof module == 'string'){
    const moduleString = module
    module = m => m[moduleString]
  }

  if(!module) module = m=>m.default

  let first

  for (const p of paths) {
    let status = `import "${p}"`
    try { 
      first = module(await import(p)) 
      debug && log(`${status} - ok`)
      break
    }catch(e){ 
      debug && log(`${status} - failed`)
    }    
  }

  return first
}