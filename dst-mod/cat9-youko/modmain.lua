local MakePlayerCharacter = require "prefabs/player_common"

-- 触手尖刺
local use_count = GetModConfigData("use_count")
AddPrefabPostInit("tentaclespike", function(inst)
    if not GLOBAL.TheWorld.ismastersim then return end
    if inst.components.finiteuses then
        if use_count == 0 then
            inst:RemoveComponent("finiteuses")
        else
            inst.components.finiteuses:SetMaxUses(use_count)
        end
    end
end)
-- 老奶奶
-- 修改初始物品
TUNING.GAMEMODE_STARTING_ITEMS.DEFAULT.WICKERBOTTOM = {"papyrus", "papyrus","spear_wathgrithr", "wathgrithrhat"}
-- 修改可以睡觉和制作女武神物品
AddPrefabPostInit("wickerbottom", function(inst)
    if not GLOBAL.TheWorld.ismastersim then return end
    inst:RemoveTag("insomniac")
    inst:AddTag("valkyrie")
end)
-- 女武神
AddPrefabPostInit("wathgrithr", function(inst)
    if not GLOBAL.TheWorld.ismastersim then return end
    
end)

-- 监听点燃
local _ACTION_LIGHT = GLOBAL.ACTIONS.LIGHT.fn
local datetime = GLOBAL.os.date() -- 获取当前时间
GLOBAL.ACTIONS.LIGHT.fn = function(act) 
    if act.doer.userid then 
        print("===============light===============")
        print(act) -- 执行的动作
        print(act.doer) -- 执行的人物
        print(act.doer:GetDisplayName().."("..act.doer.userid..")".."light"..act.target:GetDisplayName()..datetime)
        print("===============light===============")
    end
    return _ACTION_LIGHT(act)
end

--This is the function we'll call remotely to do it's thing, in this case make you giant!
local function GrowGiant(player)
    print(player)
	player.Transform:SetScale(2,2,2)
end
--This adds the handler, which means that if the server gets told "GrowGiant",
-- it will call our function, GrowGiant, above
AddModRPCHandler(modname, "GrowGiant", GrowGiant)
--This has it send the RPC to the server when you press "v"
local function SendGrowGiantRPC()
	SendModRPCToServer(MOD_RPC[modname]["GrowGiant"])
end
--This just uses keycodes, which you can look up online. This one is "v".
GLOBAL.TheInput:AddKeyDownHandler(118, SendGrowGiantRPC)

-- 打印日志
print("=========================DEBUG=========================")
-- for k,v in pairs(TUNING.GAMEMODE_STARTING_ITEMS.DEFAULT) do
--     print(k)
--     print(v)
-- end
    print("Is Server:", GLOBAL.TheNet:GetIsServer())
    print("Is Client:", GLOBAL.TheNet:GetIsClient())
    print("Is Dedicated", GLOBAL.TheNet:IsDedicated())
    
    GLOBAL.TheNet:Announce("触手尖刺")
print("=========================DEBUG=========================")
