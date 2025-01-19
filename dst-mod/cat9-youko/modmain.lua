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
-- 打印日志
print("=========================DEBUG=========================")
for k,v in pairs(TUNING.GAMEMODE_STARTING_ITEMS.DEFAULT) do
    print(k)
    print(v)
end
-- print(GLOBAL.TheNet:getUserID())
print(GLOBAL.TheNet:Say("我是菜逼！"))
print("=========================DEBUG=========================")
