import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { useRouter } from 'next/navigation'


type Props = {}

export default function ChangeLanguage({}: Props) {
const router= useRouter();
   
    const changeLanguage=(lang:string)=>{
        
        
    }
  return (
    <ToggleGroup type='single'>
        <ToggleGroupItem onClick={(e:any)=>{changeLanguage(e.target.value)}} className='font-extrabold text-primary ' value='tr'>TR</ToggleGroupItem>
        <ToggleGroupItem onClick={(e:any)=>{changeLanguage(e.target.value)}} className='font-extrabold text-primary' value='en'>EN</ToggleGroupItem>
    </ToggleGroup>
  )
}