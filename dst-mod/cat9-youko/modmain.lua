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

AddPrefabPostInit("wickerbottom", function(inst)
    if not GLOBAL.TheWorld.ismastersim then return end
    inst:RemoveTag("insomniac")
    inst:AddTag("valkyrie")
end)