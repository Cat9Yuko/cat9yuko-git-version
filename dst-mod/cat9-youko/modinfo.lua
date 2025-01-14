-- 名称
name = "Cat9 Yuko"
-- 描述
description = "从零开始学习制作mod,触手尖刺的使用次数"
-- 作者
author = "Yuko"
-- 版本
version = "0.1"
-- klei官方论坛地址，为空则默认是工坊的地址
forumthread = ""
-- modicon 下一篇再介绍怎么创建的
icon_atlas = "modicon.xml"
icon = "modicon.tex"
-- dst兼容
dst_compatible = true
-- 是否是客户端mod
client_only_mod = false
-- 是否是所有客户端都需要安装
all_clients_require_mod = true
-- 饥荒api版本，固定填10
api_version = 10

-- mod的配置项
configuration_options = {{
    name = "use_count",
    label = "第一个选项",
    hover = "使用的最大次数",
    options = {{
        description = "默认",
        hover = "默认为100次",
        data = 100
    },{
        description = "200次",
        hover = "耐久为200次",
        data = 200
    },{
        description = "无限次",
        hover = "无限耐久",
        data = 0
    }},
    default = 100
},{
    name = "select_2",
    label = "第二个选项",
    hover = "使用最大次数2",
    options = {{
        description = "默认",
        hover = "默认为10次",
        data = 10
    },{
        description = "50次",
        hover = "耐久为50次",
        data = 50
    },{
        description = "无限次",
        hover = "无限耐久",
        data = 0
    }},
    default = 10
}}