-- 名称
name = "猫九的公益服自用mod"
-- 描述
description = "可以让老奶奶睡觉制作女武神头盔和武器、调整触手尖刺的最大使用次数"
-- 作者
author = "Yuko"
-- 版本
version = "0.1"
-- klei官方论坛地址，为空则默认是工坊的地址
forumthread = ""
-- modicon
icon_atlas = "modicon.xml"
icon = "modicon.tex"
-- dst兼容
dst_compatible = true
-- 是否是客户端mod
client_only_mod = false
-- 是否是所有客户端都需要安装
all_clients_require_mod = true
-- 饥荒api版本，ds固定填6dst固定填10
api_version = 6
api_version_dst = 10

-- mod的配置项
configuration_options = {{
    name = "use_count",
    label = "调整触手尖刺的最大使用次数",
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
}}