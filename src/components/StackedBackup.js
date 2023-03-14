<AreaChart
      width={870}
      height={350}
      data={sortedData}
      margin={{
        top: 20,
        right: 40,
        left: -80,
        bottom: 0,
      }}
    >
      <XAxis dataKey="date" />
      <YAxis type="number" domain={[0, 35]} />
      <Tooltip content={CustomTooltip} />

      <Area
        type="linear"
        dataKey="srcSys"
        stackId="1"
        stroke="#652ca8"
        fill="#652ca8"
      />

      {/* <Area
        type="linear"
        dataKey="OpsManager"
        stackId="1"
        stroke="#8a38f5"
        fill="#8a38f5"
      />
      <Area
        type="linear"
        dataKey="Azure"
        stackId="1"
        stroke="#d1a8ff"
        fill="#d1a8ff"
      /> */}
    </AreaChart>