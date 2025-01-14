local use_count = GetModConfigData("use_count")
local select_2 = GetModConfigData("select_2")
AddPrefabPostInit("tentaclespike", function(inst)
    if inst.components.finiteuses then
        if use_count == 0 or select_2 == 0 then
            inst:RemoveComponent("finiteuses")
        else
            inst.components.finiteuses:SetMaxUses(use_count + select_2)
        end
    end
end)