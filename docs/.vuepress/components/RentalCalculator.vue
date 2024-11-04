<template>
  <div>
    <h3>レンタル料金計算フォーム</h3>
    <form @submit.prevent="calculateRental">
      <label>開始日:
        <input type="date" v-model="startDate" required />
      </label>
      <br />
      <label>終了日:
        <input type="date" v-model="endDate" required />
      </label>
      <br />
      <label>走行距離 (km):
        <input type="number" v-model.number="distance" required />
      </label>
      <br />
      <button type="submit">料金を計算</button>
    </form>
    <div v-if="rentalCost !== null">
      <p>レンタル料金: {{ rentalCost }} 円</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseCost: {
      type: Number,
      default: 1000 // デフォルト値を設定
    }
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      distance: 0,
      rentalCost: null,
    };
  },
  methods: {
    calculateRental() {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      if (isNaN(start) || isNaN(end) || start >= end) {
        alert('有効な日付を入力してください');
        return;
      }

      let totalCost = 0;
      let dayCount = 0;
      const weekdayDiscount = 500; // 平日割引
      const consecutiveDiscount = 500; // 連続割引（2日目以降）
      const maxDailyDistance = 300; // 1日あたりの上限距離
      const excessDistanceCostPer100km = 1000; // 超過100kmごとの追加料金

      // 日ごとに料金を計算
      for (let date = new Date(start); date < end; date.setDate(date.getDate() + 1)) {
        let dailyCost = this.baseCost; // 引数から受け取った baseCost を使用

        // 平日割引の適用（月曜日から金曜日）
        const isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
        if (isWeekday) {
          dailyCost -= weekdayDiscount;
        }

        // 連続割引の適用（2日目以降）
        if (dayCount > 0) {
          dailyCost -= consecutiveDiscount;
        }

        totalCost += dailyCost;
        dayCount++;
      }

      // 距離超過分の計算
      const totalAllowedDistance = maxDailyDistance * dayCount;
      const excessDistance = Math.max(0, this.distance - totalAllowedDistance);
      const excessCost = Math.ceil(excessDistance / 100) * excessDistanceCostPer100km;

      // 最終レンタル料金を計算
      this.rentalCost = totalCost + excessCost;
    },
  },
};
</script>
