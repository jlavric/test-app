export class TweetsService {
    getTweets() {
        return [
            { title: 'first message', cnt: 1, user: '@janez', desc: 'dasdhas djkashdkhasjkdhasjkd hkasjhd kasjhd ksajl+d asd' },
            { title: 'second message', cnt: 2,user: '@someotherpers', desc: 'dasdhas djkashdkhasjkdhasjkd hkasjhd kasjhd ksajl+d asd' },
            { title: 'third message', cnt: 3,user: '@use2be4', desc: 'dasdhas djkashdkhasjkdhasjkd hkasjhd kasjhd ksajl+d asd' },
            { title: 'no message', cnt: 4,user: '@nomorebolero', desc: 'dasdhas djkashdkhasjkdhasjkd hkasjhd kasjhd ksajl+d asd' }
             
        ];
    }
}