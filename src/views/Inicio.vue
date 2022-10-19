<template>
    <header class="HContainer">
        <h1 class="titulo">OPEN EVENTS</h1>
    </header>
    <main>
       
    </main>
    <footer>
        <article class="FContainer">
            <section class="Fleft">
                <h4>Contactanos</h4>
            </section>
            <section class="Fright">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8RERIPEBERDxAPEA8PDw8PDxEPDw8PGBQZGRgUGBYcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMDw8QGhESGjUhGCE3MTQxNDE0NDExNDE1NDQxMTQ0NDE0NDE0NDQ0MTQxNDE0NDQ0NDQ0MTQ0NDQ0NDE0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUHBv/EAEQQAAIBAQMFCgsGBwADAAAAAAABAgMEBhEFEiExURMyYXFzkaGxwdEUFjQ1QVNUcoGTsgciJDNCUhUXI0OSotJiY4L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQQDBQL/xAAqEQACAQMEAAUEAwEAAAAAAAAAAQIREjEDMlFxBCFBsfATFGGBQlLBM//aAAwDAQACEQMRAD8A7MAAAU6m+fGNHVN8+MaAWaG9+LJSnK2Uqccak4Q0vfSSKsrxWFaPCIdPcVRbwiVSL9o9HxICjWvFYXhhXg9e3uIvGCxevj0lslwxcuTYs+v4dpZMGjeKwp6a8Fo4e4m8ZbB7RD/buFkuGLlyalbev4dZVKVS8thaaVoh09xX8YrD6+HT3CyXDFy5NaOtcaLp52N47Div68da29xZ8aMn+0w/27hZLhi5cmyUpa3xsp+NGT/aYf7dxVleWwYv8RHW9oslwxcuTVLVHer49Z5/xksHtEOknp3oyekk7TDp7hZLhi5cm6V6+tcRmeNWTvaafT3ENa9GT29Fphq4e4WS4YuXJpk9n9PwMDxnsHtMOklo3pycscbTTWrb3FslwxVcnoSKvvfijIjevJr0eFU/i2uwv0rdQrRxpVIVFit5JM+XGSyqCqYg6nvlxoaOp75caIUuAAAFPdJbXzhuktr5xoAE8pRjHOlgko4ylLBJL0ts8ble8k5tws2FOnqdXN+/P3cd6uHWLenKjnLwaD/p00t1we/nrzeJdZ5+MW2adLSW5nOUvRDZLF4yxnLbJ5z52GY9hdhZmK6eB3uOdCg4Ma6bNHMQjpi4UM502MdNmm6aGuCFxKGY6bEdNmi4IY6aLcKGc6bGuDNFwI5QLUlDPcGNcGX3AZKBagouDGODL0oEcolqQpODGuLLcokUolqCq4iNFiSIpI+iUIWhKdSUHnQlKElqlBuL6B8kRSBD2t3L8ThKNK24VIPCKr5v34e/+5cOvjOjQlCUVOGbKMo50ZRwaaw0NM4Ez232fZflCfgNWWMKik6Dk95P9nE+vjMmvoKl0Ttp6nozoe6S2vnDdJbXzjQMZ3LO4x4ecgtrjTpzqPH7kJS17EXDKvM8LHX9ztRYqrSI3RHPM5vS9MpNyk9rbxLlkh6SpHWaNn0RN0mcESyZDMdORGfJQAAAEGseNkARsaxzGSPpEI2MkOYxlAyQyQ6RHRjUqyzKEJVZLQ3HRCPHJ6CkGyI2blmuraZ6ataFL/wpQzpL/wCnoNCnc+y/rnXnxzUVzJHw9bTXqVQk/Q8fIike8jdGw/sm+OrPvHeKFg9XP5s+8fcQ/Pz9l+nI57IjkdHVz7B6ufzZ94qubk/1c/mz7x9zp/n5+yfTkczkRSLeUKUadarCGiNOpOEU3i1FPQVJGipzoRyFpVZU5RnF4ShJTT4U8RJDGUh3vJ1SNajTrLVUhCevaizuMeHnMe5bbydZcfVJdLN08mSo2jYnVVK+7vYucy7y1sbJWWH6F6eFF4zbx+SVvcXWiw3ISwzxENZdpT0YFCGstwNrOBLKQgmImJCjgxG4hiALiNbBsY2AEmMkOkxjZSEchsmOkyKFmlXqws0W1nvGpJfpprfP46ikZZyPkqVre6TbhZYvD7rwlXa9Cfoie1s1nhTiqdOEYQjoUYrBDqFKMIxhBKMIJRjFalFakXKFH0mPU1HN/g7xio9kcKLZYjZ0WIQwH4HM+iFUVsF3JEoAEe5oMxEgAHEcuLC1Wnl6nWZkjTy/5ZaeXn1mXJnqxwv17GN5GSGsVjWfRDs9zKuGT7MsNVPbws293exc5gXO8gs3J9rNk8qe59myOES7hLauky7y0mrHWejRDtRumRejyOv7nahDchLDOew1lqBUjrLMGbmZ0SYhiMxDE+Si4iYhiGJaAGxGxGxrYArZHJg2NbKBGzWufQzp17Q/RKNCD4IrGXSzHlI9Rc6nhY4S9M51aj4cZtdSRz1nSD/JYbjdowxZo04lazRLiMZ3FAAAADLy3lyz2OKlVbcp4qFOGmc+JehcJ5Kt9oNXH7llgo+jPqty5kjpHSnJVS8j5c4rJ0EDnD+0K1ezUf8AOYj+0S0+zUfmSPr7fU+Mn1InmLweV2nl59ZlzLVutMqtSdaSUXUnKbim2k36CpJm9YRmY2Q1isaylOz3NpN5Psz0aafazb3CW1dJlXJ83WXk+1m8eXPc+zVHCI91jt6GZN56kXY66T/Qtu1Fwyrz+R1/c7UIbkJYZ4eOssxMOjaJJ68ePSaFO2bVzG9xM6ZexExII2mD9OHGh6qJ6muchR+ImI1sa2AObGtiNiNgA2MbBsY2UglR/dfE+o9pdiOFis3JJ87bPEVX92XE+o91dlfgrNyMO04+I2rv/Gfenk3rOtBZK9n1FgyHYAAADlN87Q52+qm8VSUacVsWbi+swJM171v8fauUj9ETHkz0obV0jLLLGSZHJjpMjkz7INkRyYspIjlJBAVjWI5DWyg7bcqpFZOsqx/t8O1m7usdvQzzdzfN9m5PtZtHlz3Ps1Rwhc17HzGVehPwOvoe82cKPRGNe3yG0cn2oQ3LsSwzkkHpLUWVIay1Bnpsyj8QxGYhifJSVTktTYqry285DiJiKAseEy2IPCeDpK+I1sUBZdpWxieER4R2ScmVLXOcIThDc4xk3OLeOLa9Br+Jlp9fS+XLvPlyhF0b8ypSeEYdSvHB8T9HAdCuwvwVm5GB5l3KtL/v0vlyPYZJsjoWelQlJSdKEYOSWCbXpM+vOMopRZ0gmn5o1KOonIqK0EpmOoAAAHG72zwt9q9P9RfTExZVGdEy3ceraLTVtEa8IqrJSUZQk2tCWvHgM7+XVf2in/hI3x1dO1eZncJVweJdR7SKTPd/y3r+0U/8JB/LWv7TT/wkfX1tP+xLJcHgJMaWcoWbcqs6WdnOnOUHJam08MSsdT4EABAU7Rc2L/h9m0P8vZws2817HzGbcjzbZOSXWzfPLnufZqjhAY17vIbR7nai5nPa+cyb1SfgVfS95t4UIbl2JYZyuOssxZVjrJos9NmUlxDEjxExICTETEZiJiAPxGtjcRGyg9RcP8+vydP6me7hHE8JcD8+vydP6me/ooweI/6P9GjT2jo0iRUkSxQpxPsbCOA4AAAAAABMBQAASTwTexNile31MyjVn+2nUlzRbAOB5QqZ9arL91SpLnkysLN4tvbpGnrGMGAgEKdyuR5usvJ9rN88vcyT/h9m0v8AL28LNvOe1855k9z7NUcIQyb0+RV/c7Ueg3KOzpZj3tglYbQ0v0cO1CG5diWGchRLFkCZKmeozIh+IYjMQxIUfiNxGYiYlBI2NchmIjYJU9f9nv51fk6f1M6BR1nL7n5XoWSpVlXlKKnCEY5sHPFpvHUevp31ycv11PlTMWvCbm2k2d4SSjk9WhTzKvxk31kvlTN+x2qFanCtTeMKkVOLawbi9TwODhKOVQ6Jp4ZOAAfJQAAAADBt17bBQqSo1KkozpvNklCTSeGOsr+PWTPWy+XM+1pzf8WfN0eT0xkXrq5lgtUv/ROK45LN7Sh49ZM9bL5czGvbe2xWixVaFCpKU55iScJRWappvS+BH1DSncqokpqj8zmLGgB6BnAaxQIDtNzPN9m5PtZtmZciEXk2yNrXSW3azd3KOzpZ5s9z7NUcIkMW9/kFp5PtRo7vLYjIvZVbsNoWjedqENy7EsM5HiKmMxFxPVMg/ETEbnCYgVHYhiMxDEAc2I2NxExBBWxGxuI3EAe2dlupL8BZOQgcXbO0XU8gsnIQMvitq+eh10sm1FiiRFMRoAAAA4jffzjaeUX0owDfvx5xtPvr6YmAepHaul7GR5YjEFEKAEACABAEAO63H822Xkl1s3zzNyarWTrKtH5a62bu7y2I82e5mqOERGRevyK0e52o3dwe3oMa91HCwWh46qezhQhuXYlhnImxuIMRnqmMVsTOGsRlAuImcI2JiAOxExG4hiALiI5CMQgDE7ddNfgLLyEDh53G6XkFk5CBl8VtXZ10ss2ABgYjQAAABxC/HnG08ovpRgG/fnzjaffX0o8+enHaul7GR5YCADKAYgAAII2DEIDtly/N1l5PtZuGRcijjk6yvHXT2cLN3cHt6Dzp7n2zVHCLBiXvTdgtOHqn1o1t2jw8xXyhCNWjUpPHCpCcNW1Ei6NMPzVDhbGElanKE5QlolCUotcKeBGeuYwYjYMABojFEAEFAQgAaAgAHcro+b7JyEOo4adzul5BZOQh1GXxW1dnXSyzYYgrEMRoAAAA4ffnzjaeUX0owDfvz5xtPKL6UYB6cdq6XsZXliCCiFIAgDWQAIKPo0pTnGEVjKcowiltbwQB3S48Wsm2VP1S5sWb5QyZSjRoUqK1U6cIatiwLW7R4eY81urbNSwVgHbnLY+YNzlsfMQpz2/+QZQn4bSjjCaiq6it5PVn8T6zxJ32cYShmTUZRlHNlGWDTXpTRzi8lx5wcqtiwqQeMnQzvvw9z9y4NfGbdDXVLZM4amm8o8OxB9alODzZxlCS1xknF9JGazgACACgNAQgAAEAA7ndHzfZOQh1HDDul0fN9k5CHUZfFbV2ddLJsMQViYGI0AAYBgAcOvz5xtPKL6UYBv35842nlF9KPPnpxwul7GR5YCCjGygGAhJRoznJRhCU5PVGEXJ8yIBh777NruSnPw+rFqnTUlZ1Jb+p+/iXXxBdf7P5zlGtb8KdNNSVnUv6k/f/AGrg18R1CEIQgoQUYxjHNhCOCSWGhJGbV1VS2J2hD1ZCA7c5bHzBuctj5jKdS4AAAU6m+fGNHVN8+MaAFSwUK0MKtOFRad/FMoyunk16XZafNga9De/FkpVKSwyUTPO1rqZOWGFlgte3vIfFXJ3s0OZ956Gv6PiQFvlyxauDJo3Uya3pstN6OHvJvFDJnslPp7zVs+v4dpZF8uRauDz1S6OTFF4WWn095B4q5O9mh0956SrvX8Osqi+XItXBixunk3FfhYa1t7zUp5Ds0IqMIOMYrCMY1KkYxWxJMnjrXGi6LpciiM7+D2f9s/nVf+itLJVHF6J63/eqf9G0UnrfGyXPkURR/hdHZP51T/osU8j2dpYxl82r/wBEpao71fHrFz5FEY1W6eTpyc52aE5PS5ScpSb4W2Vq10MmJ6LJTWjh7z0xWr61xd5b5csWrg8/4pZN9lp9PeSUbn5LeONkpvVt7zXJ7P6fgL5csWrgx43PyWnirJS+KbXWaFHJ9nowwo0qdNaN5CMeovkVfe/FEbbyxRIrDqe+XGho6nvlxohS4AAAf//Z" width="25" height="25"  alt="Facebook">
                <img src="https://i.pinimg.com/736x/63/7f/50/637f50997ef58ffe6ad2ac968e22d0ee.jpg" width="25" height="25"  alt="Instagram">
                <img src="https://img1.freepng.es/20180604/vov/kisspng-facebook-inc-farmville-facebook-query-language-f-facebook-template-5b15de6899f786.1656511615281598486307.jpg" width="25" height="25"  alt="Instagram">
                <img src="https://img1.freepng.es/20180604/vov/kisspng-facebook-inc-farmville-facebook-query-language-f-facebook-template-5b15de6899f786.1656511615281598486307.jpg" width="25" height="25"  alt="Instagram">
            </section>
        </article>
    </footer>
  </template>
<style>

.HContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: cadetblue;
}
.FContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: cadetblue;
    align-items: center;
    flex-wrap: wrap;
    
}
.Fright{
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    
}

.Fleft{
    display: flex;
    justify-items: center;
    padding-right: 15%;
    padding-left: 10%;
}

</style>