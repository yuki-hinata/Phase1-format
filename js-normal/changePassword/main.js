// const Form =document.getElementsByTagName('form');
const now = document.getElementById('nowPassword');
let passwordValue = 'aaaaa';
now.textContent = `現在のパスワードは${passwordValue}です`;
const set = document.getElementById('setPassword');

set.addEventListener('click', function () {
    const old = document.getElementById('confirmPassword').value;
    const newpass = document.getElementById('newPassword').value;
    if (passwordValue === old) {
        if (passwordValue !== newpass) {
            // const research = /abc/g;
            // let kekkka = newpass.search(research);
            // console.log(kekkka);
            // if (kekkka < 0) {
            //     passwordValue = newpass;
            //     passwordValue.textContent = passwordValue;
            //     now.textContent = `現在のパスワードは${passwordValue}`
            //     alert(`新しいパスワードは${passwordValue}です`)
            // } else {
            //     alert('「abc」を含むの目。')
            // }
            const research =/abc/g;
            let result = newpass.match(/^\d{3}-?\d{4}$/g && /(.)\1/ && research);
            console.log(!result);
            if (!result) {
                alert('xxxx-yyyの形かつ同じ文字禁止かつabc服務の目');
            }else {
                passwordValue = newpass;
                passwordValue.textContent = passwordValue;
                now.textContent = `現在のパスワードは${passwordValue}`;
                alert(`新しいパスワードは${passwordValue}です`);
            }
        } else {
            alert('同じ文字はダメ');
        }
    } else {
        alert('古いパスワードが間違っています');
    }
});
