CreateThread(function()
    while true do
        Wait(0)

        if IsControlJustReleased(0, 38) then -- E
            TriggerServerEvent('counter:add')
        end
    end
end)
