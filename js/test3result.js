window.onload = function(e) {
    var map=new Map();
    map.set("i", Number(sessionStorage.getItem('i')));
    map.set("a", Number(sessionStorage.getItem('a')));
    map.set("s", Number(sessionStorage.getItem('s')));
    map.set("e", Number(sessionStorage.getItem('ee')));
    map.set("c", Number(sessionStorage.getItem('c')));
    map.set("r", Number(sessionStorage.getItem('r')));
    var arr = Array.from(map);
    var mingzhou = document.querySelectorAll('.mingzhou');
    var wenzhou = document.querySelector('.wenzhou');
    var btn = document.querySelector('button');

    console.log(arr);

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        textStyle: {
            fontSize: 8,
        },
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['600元以下','600-1200元','1200-1800元','1800元以上']
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius: ['20%', '40%'],
                center: ['50%', '50%'],
                data: [
                    {value: arr[5][1], name: '研究型（|）'},
                    {value: arr[4][1], name: '艺术型（A）'},
                    {value: arr[2][1], name: '企业型（E）'},
                    {value: arr[1][1], name: '传统型（C）'},
                    {value: arr[3][1], name: '社会型（S）'},
                    {value: arr[0][1], name: '现实型（R）'}
                ],
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}({d}%)'
                        },
                        itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
                }
        ]
    };

    myChart.setOption(option);

    btn.addEventListener('click', function(e) {
        window.location = "index.html";
    })

    for(var j = 0; j < mingzhou.length; j++)
    {
        mingzhou[j].innerHTML = arr[j][1];
        //console.log(arr[j]);
    }
    arr.sort(function(a, b) {
        return b[1]-a[1];
    });
    var array = arr.slice(0, 3);
    var result = new Map(array.map(i => [i[0], i[1]]));
    var end = Array.from(result.keys());

    if(end[0] == 'r')
    {
        if(end[1] == 'i')
        {
            if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于RIA型人格，适合的职业有：牙科技术员、陶工建筑设计员、模型工细木工、制作链条人员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于RIS型人格，适合的职业有：厨师、林务员、跳水员、潜水员、染色员、电器修理、眼镜制作、电工、纺织机器装配工、服务员、装玻璃工人、发电厂工人、焊接工。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于RIE型人格，适合的职业有：建筑和桥梁工程、环境工程、航空工程、公路工程、电力工程、信号工程、电话工程、一般机械工程、自动工程、矿业工程、海洋工程、交通工程技术人 员、制图员、家政经济人员、计量员、农民、农场工人、农业机械操作、清洁工、无线电修理、汽车修理、手表修理、管工、线路装配工、工具仓库管理员。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于RIC型人格，适合的职业有：船上工作人员、接待员、杂志保管员、牙医助手、制帽工、磨坊工、石匠、机器制造、机车(火车头)制造、农业机器装配、汽车装配工、缝纫机装配工、 钟表装配和检验、电动器具装配、鞋匠、锁匠、货物检验员、电梯机修工、托儿所所长、钢琴调音员、装配工、印刷工、建筑钢铁工作、卡车司机。';
            }
        }
        else if(end[1] == 'a')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于RAI型人格，适合的职业有：手工雕刻、玻璃雕刻、制作模型人员、家具木工、制作皮革品、手工绣花、手工钩针纺织、排字工作、印刷工作、图画雕刻、装订工。';
            }
        }
        else if(end[1] == 's')
        {
            if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于RSE型人格，适合的职业有：消防员、交通巡警、警察、门卫、理发师、房间清洁工、屠夫、锻工、开凿工人、管道安装工、出租汽车驾驶员、货物搬运工、送报员、勘探员、娱乐场所的服务员、起卸机操作工、灭害虫者、电梯操作工、厨房助手。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于RSI型人格，适合的职业有：纺织工、编织工、农业学校教师、某些职业课程教师（诸如艺术、商业、技术、工艺课程）、雨衣上胶工。';
            }
        }
        else if(end[1] == 'e')
        {
            if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于REC型人格，适合的职业有：抄水表员、保姆、实验室动物饲养员、动物管理员。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于REI型人格，适合的职业有：轮船船长、航海领航员、大副、试管实验员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于RES型人格，适合的职业有：旅馆服务员、家畜饲养员、渔民、渔网修补工、水手长、收割机操作工、搬运行李工人、公园服务员、救 生员、登山导游、火车工程技术员、建筑工作、铺轨工人。';
            }
        }
        else if(end[1] == 'c')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于RCI型人格，适合的职业有：测量员、勘测员、仪表操作者、农业工程技术、化学工程技师、民用工程技师、石油工程技师、资料室管理员、探矿工、煅烧工、烧窖工、矿工、保养工、 磨床工、取样工、样品检验员、纺纱工、炮手、漂洗工、电焊工、锯木工、刨床工、制帽工、手工缝纫工、油漆工、染色工、按摩工、木匠、农民建筑工作、电影放 映员、勘测员助手。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于RCS型人格，适合的职业有：公共汽车驾驶员、一等水手、游泳池服务员、裁缝、建筑工作、石匠、烟囱修建工、混凝土工、电话修理工、爆炸手、邮递员、矿工、裱糊工人、纺纱工。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于RCE型人格，适合的职业有：打井工、吊车驾驶员、农场工人、邮件分类员、铲车司机、拖拉机司机。';
            }
        }
    }
    else if(end[0] == 'i')
    {
        if(end[1] == 'a')
        {
            if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于IAS型人格，适合的职业有：普通经济学家、农场经济学家、财政经济学家、国际贸易经济学家、实验心理学家、工程心理学家、心理学家、哲学家、内科医生、数学家。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于IAR型人格，适合的职业有：人类学家、天文学家、化学家、物理学家、医学病理、动物标本剥制者、化石修复者、艺术品管理者。';
            }
        }
        else if(end[1] == 's')
        {
            if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于ISE型人格，适合的职业有：营养学家、饮食顾问、火灾检查员、邮政服务检查员。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于ISC型人格，适合的职业有：侦察员、电视播音室修理员、电视修理服务员、验尸室人员、编目录者、医学实验定技师、调查研究者。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于ISR型人格，适合的职业有：水生生物学者，昆虫学者、微生物学家、配镜师、矫正视力者、细菌学家、牙科医生、骨科医生。';
            }
            else if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于ISA型人格，适合的职业有：实验心理学家、普通心理学家、发展心理学家、教育心理学家、社会心理学家、临床心理学家、目标学家、皮肤病学家、精神病学家、妇产科医师、眼科医生、五官科医生、医学实验室技术专家、民航医务人员、护士。';
            }
        }
        else if(end[1] == 'e')
        {
            if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于IES型人格，适合的职业有：细菌学家、生理学家、化学专家、地质专家、地理物理学专家、纺织技术专家、医院药剂师、工业药剂师、药房营业员。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于IEC型人格，适合的职业有：档案保管员、保险统计员。';
            }
        }
        else if(end[1] == 'c')
        {
            if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于ICR型人格，适合的职业有：质量检验技术员、地质学技师、工程师、法官、图书馆技术辅导员、计算机操作员、医院听诊员、家禽检查员。';
            }
        }
        else if(end[1] == 'r')
        {
            if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于IRA型人格，适合的职业有：地理学家、地质学家、声学物理学家、矿物学家、古生物学家、石油学家、地震学家、声学物理学家、原子和分子物理学家、电学和磁学物理学家、气象学家、设计审核员、人口统计学家、数学统计学家、外科医生、城市规划家、气象员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于IRS型人格，适合的职业有：流体物理学家、物理海洋学家、等离子体物理学家、农业科学家、动物学家、食品科学家、园艺学家、植物学家、细菌学家、解剖学家、动物病理学家、作 物病理学家、药物学家、生物化学家、生物物理学家、细胞生物学家、临床化学家、遗传学家、分子生物学家、质量控制工程师、地理学家、兽医、放射性治疗技师。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于IRE型人格，适合的职业有：化验员、化学工程师、纺织工程师、食品技师、渔业技术专家、材料和测试工程师、电气工程师、土木工程师、航空工程师、行政官员、冶金专家、原子核工程师、陶瓷工程师、地质工程师、电力工程量、口腔科医生、牙科医生。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于IRC型人格，适合的职业有：飞机领航员、飞行员、物理实验室技师、文献检查员、农业技术专家、动植物技术专家、生物技师、油管检查员、工商业规划者、矿藏安全检查员、纺织品检验员、照相机修理者、工程技术员、编计算程序者、工具设计者、仪器维修工。';
            }
        }
    }
    else if(end[0] == 'c')
    {
        if(end[1] == 'r')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于CRI型人格，适合的职业有：簿记员、会计、记时员、铸造机操作工、打字员、按键操作工、复印机操作工。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于CRS型人格，适合的职业有：仓库保管员、档案管理员、缝纫工、讲述员、收款人。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于CRE型人格，适合的职业有：标价员、实验室工作者、广告管理员、自动打字机操作员、电动机装配工、缝纫机操作工。';
            }
        }
        else if(end[1] == 'i')
        {
            if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于CIS型人格，适合的职业有：记账员、顾客服务员、报刊发行员、土地测量员、保险公司职员、会计师、估价员、邮政检查员、外贸检查员。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于CIE型人格，适合的职业有：打字员、统计员、支票记录员、订货员、校对员、办公室工作人员。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于CIR型人格，适合的职业有：校对员、工程职员、海底电报员、检修计划员、发扳员。';
            }
        }
        else if(end[1] == 's')
        {
            if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于CSE型人格，适合的职业有：接待员、通讯员、电话接线员、卖票员、旅馆服务员、私人职员、商学教师、旅游办事员。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于CSR型人格，适合的职业有：运货代理商、铁路职员、交通检查员、办公室通信员、薄记员、出纳员、银行财务职员。';
            }
            else if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于CSA型人格，适合的职业有：秘书、图书管理员、办公室办事员。';
            }
        }
        else if(end[1] == 'e')
        {
            if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于CER型人格，适合的职业有：邮递员、数据处理员、办公室办事员。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于CEI型人格，适合的职业有：推销员、经济分析家。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于CES型人格，适合的职业有：银行会计、记账员、法人秘书、速记员、法院报告人。';
            }
        }
    }
    else if(end[0] == 'e')
    {
        if(end[1] == 'c')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于ECI型人格，适合的职业有：银行行长、审计员、信用管理员、地产管理员、商业管理员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于ECS型人格，适合的职业有：信用办事员、保险人员、各类进货员、海关服务经理、售货员，购买员、会计。';
            }
        }
        else if(end[1] == 'r')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于ERI型人格，适合的职业有：建筑物管理员、工业工程师、农场管理员、护士长、农业经营管理人员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '仓库管理员、房屋管理员、货栈监督管理员。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于ERC型人格，适合的职业有：邮政局长、渔船船长、机械操作领班、木工领班、瓦工领班、驾驶员领班。';
            }
        }
        else if(end[1] == 'i')
        {
            if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于EIR型人格，适合的职业有：科学、技术和有关周期出版物的管理员。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '专利代理人、鉴定人、运输服务检查员、安全检查员、废品收购人员。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于EIS型人格，适合的职业有：警官、侦察员、交通检验员、安全咨询员、合同管理者、商人。';
            }
        }
        else if(end[1] == 'a')
        {
            if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于EAS型人格，适合的职业有：法官、律师、公证人。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于EAR型人格，适合的职业有：展览室管理员、舞台管理员、播音员、训兽员。';
            }
        }
        else if(end[1] == 's')
        {
            if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于ESC型人格，适合的职业有：理发师、裁判员、政府行政管理员、财政管理员、I程管理员、职业病防治、售货员、商业经理、办公室主任、人事负责人、调度员。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于ESR型人格，适合的职业有：家具售货员、书店售货员、公共汽车的驾驶员、日用品售货员、护士长、自然科学和工程的行政领导。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于ESI型人格，适合的职业有：博物馆管理员、图书馆管理员、古迹管理员、饮食业经理、地区安全服务管理员、技术服务咨询者、超级市场管理员、零售商品店店员、批发商、出租汽车服务站调度。';
            }
            else if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于ESA型人格，适合的职业有：博物馆馆长、报刊管理员、音乐器材售货员、广告商售画营业员、导游、（轮船或班机上的）事务长、飞机上的服务员、船员、法官、律师。';
            }
        }
    }
    else if(end[0] == 'a')
    {
        if(end[1] == 's')
        {
            if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于ASE型人格，适合的职业有：戏剧导演、舞蹈教师、广告撰稿人，报刊、专栏作者、记者、演员、英语翻译。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于ASI型人格，适合的职业有：音乐教师、乐器教师、美术教师、管弦乐指挥，合唱队指挥、歌星、演奏家、哲学家、作家、广告经理、时装模特。';
            }
        }
        else if(end[1] == 'e')
        {
            if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于AER型人格，适合的职业有：新闻摄影师、电视摄影师、艺术指导、录音指导、丑角演员、魔术师、木偶戏演员、骑士、跳水员。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于AEI型人格，适合的职业有：音乐指挥、舞台指导、电影导演。';
            }
            else if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于AES型人格，适合的职业有：流行歌手、舞蹈演员、电影导演、广播节目主持人、舞蹈教师、口技表演者、喜剧演员、模特。';
            }
        }
        else if(end[1] == 'i')
        {
            if(end[2] == 's')
            {
                wenzhou.innerHTML = '你属于AIS型人格，适合的职业有：画家、剧作家、编辑、评论家、时装艺术大师、新闻摄影师、男演员、文学作者。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于AIE型人格，适合的职业有：花匠、皮衣设计师、工业产品设计师、剪影艺术家、复制雕刻品大师。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于AIR型人格，适合的职业有：建筑师、画家、摄影师、绘图员、环境美化工、雕刻家、包装设计师、陶器设计师、绣花工、漫画工。';
            }
        }
    }
    else if(end[0] == 's')
    {
        if(end[1] == 'e')
        {
            if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于SEC型人格，适合的职业有：社会活动家、退伍军人服务官员、工商会事务代表、教育咨询者、宿舍管理员、旅馆经理、饮食服务管理员。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于SER型人格，适合的职业有：体育教练、游泳指导。';
            }
            else if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于SEI型人格，适合的职业有：大学校长、学院院长、医院行政管理员、历史学家、家政经济学家、职业学校教师、资料员。';
            }
            else if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于SEA型人格，适合的职业有：娱乐活动管理员、国外服务办事员、社会服务助理、一般咨询者、宗教教育工作者。';
            }
        }
        else if(end[1] == 'c')
        {
            if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于SCE型人格，适合的职业有：部长助理、福利机构职员、生产协调人、环境卫生管理人员、戏院经理、餐馆经理、售票员。';
            }
        }
        else if(end[1] == 'r')
        {
            if(end[2] == 'i')
            {
                wenzhou.innerHTML = '你属于SRI型人格，适合的职业有：外科医师助手、医院服务员。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于SRE型人格，适合的职业有：体育教师、职业病治疗者、体育教练、专业运动员、房管员、儿童家庭教师、警察、引座员、传达员、保姆。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于SRC型人格，适合的职业有：护理员、护理助理、医院勤杂工、理发师、学校儿童服务人员。';
            }
        }
        else if(end[1] == 'i')
        {
            if(end[2] == 'a')
            {
                wenzhou.innerHTML = '你属于SIA型人格，适合的职业有：社会学家、心理咨询者、学校心理学家、政治科学家、大学或学院的系主任、大学或学院的教育学教师、大学农业教师、大学工程和建筑课程的教师、大学法律教师、大学数学、医学、物理、社会科学和生命科学的教师、研究生助教、成人教育教师。';
            }
            else if(end[2] == 'e')
            {
                wenzhou.innerHTML = '你属于SIE型人格，适合的职业有：营养学家、饮食学家、海关检查员、安全检查员、税务稽查员、校长。';
            }
            else if(end[2] == 'c')
            {
                wenzhou.innerHTML = '你属于SIc型人格，适合的职业有：描图员、兽医助手、诊所助理、体检检查员、监督缓刑犯的工作者、娱乐指导者、咨询人员、社会科学教师。';
            }
            else if(end[2] == 'r')
            {
                wenzhou.innerHTML = '你属于SIR型人格，适合的职业有：理疗员、救护队工作人员、手足病医生、职业病治疗助手。';
            }
        }
    }
    console.log(end);
}