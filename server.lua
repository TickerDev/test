local playerCounts = {}

RegisterNetEvent('counter')
AddEventHandler('counter:add', function()
    local src = source

    if not playerCounts[src] then
        playerCounts[src] = 0
    end

    playerCounts[src] = playerCounts[src] + 1

    TriggerClientEvent('chat:addMessage', src, {
        args = {
            '^2Counter',
            ('Current count: %s'):format(playerCounts[src])
        }
    })
end)

AddEventHandler('playerDropped', function()
    local src = source
    playerCounts[src] = nil
end)
