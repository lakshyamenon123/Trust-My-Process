import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Award } from 'lucide-react-native'
import Card from '../components/Card'
import ProgressRing from '../components/ProgressRing'
import LevelBar from '../components/LevelBar'
import IconBadge from '../components/IconBadge'
import { progress } from '../data/studentData'
import { colors, fonts } from '../theme'

export default function ProgressScreen() {
  const maxScore = Math.max(...progress.weeklyTrend.map((w) => w.score))

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card style={styles.overallCard}>
        <ProgressRing value={progress.overall} size={84} color={colors.primary} />
        <View style={styles.overallText}>
          <Text style={styles.overallTitle}>Overall progress</Text>
          <Text style={styles.overallSubtitle}>Based on academics, skills, and activity across the term.</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>By subject</Text>
        <View style={styles.subjectList}>
          {progress.subjects.map((subject) => (
            <LevelBar key={subject.name} label={subject.name} value={subject.level} />
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Weekly trend</Text>
        <View style={styles.chart}>
          {progress.weeklyTrend.map((week) => (
            <View key={week.week} style={styles.chartCol}>
              <View style={styles.barTrack}>
                <View style={[styles.bar, { height: `${(week.score / maxScore) * 100}%` }]} />
              </View>
              <Text style={styles.chartLabel}>{week.week}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Milestones</Text>
        <View style={styles.timeline}>
          {progress.milestones.map((milestone, index) => (
            <View key={milestone.title} style={styles.milestoneRow}>
              <View style={styles.timelineMarkerCol}>
                <View style={styles.timelineDot} />
                {index < progress.milestones.length - 1 && <View style={styles.timelineLine} />}
              </View>
              <View style={styles.milestoneBody}>
                <Text style={styles.milestoneDate}>{milestone.date}</Text>
                <Text style={styles.milestoneTitle}>{milestone.title}</Text>
                <Text style={styles.milestoneDescription}>{milestone.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementGrid}>
          {progress.achievements.map((achievement) => (
            <View key={achievement.title} style={styles.achievementItem}>
              <IconBadge icon={achievement.icon} size={40} color={colors.highlight} />
              <Text style={styles.achievementTitle} numberOfLines={2}>{achievement.title}</Text>
              <Text style={styles.achievementDate}>{achievement.date}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <View style={styles.sectionHeaderRow}>
          <Award size={16} color={colors.primary} />
          <Text style={styles.sectionTitle}>Recommendations</Text>
        </View>
        <View style={styles.recList}>
          {progress.recommendations.map((rec) => (
            <View key={rec.title} style={styles.recRow}>
              <IconBadge icon={rec.icon} size={36} />
              <View style={styles.recBody}>
                <Text style={styles.recTitle}>{rec.title}</Text>
                <Text style={styles.recDescription}>{rec.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  overallCard: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  overallText: { flex: 1, gap: 4 },
  overallTitle: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  overallSubtitle: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted, lineHeight: 17 },
  sectionTitle: { fontFamily: fonts.displaySemibold, fontSize: 14, color: colors.ink, marginBottom: 12 },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 12 },
  subjectList: { gap: 14 },
  chart: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 120, gap: 8 },
  chartCol: { flex: 1, alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' },
  barTrack: { flex: 1, width: '100%', justifyContent: 'flex-end' },
  bar: { width: '100%', backgroundColor: colors.primary, borderRadius: 6, minHeight: 6 },
  chartLabel: { fontFamily: fonts.body, fontSize: 10.5, color: colors.muted },
  timeline: { gap: 0 },
  milestoneRow: { flexDirection: 'row', gap: 12 },
  timelineMarkerCol: { alignItems: 'center', width: 12 },
  timelineDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, marginTop: 3 },
  timelineLine: { flex: 1, width: 2, backgroundColor: colors.border, marginVertical: 2 },
  milestoneBody: { flex: 1, paddingBottom: 16, gap: 2 },
  milestoneDate: { fontFamily: fonts.bodyMedium, fontSize: 11, color: colors.primary },
  milestoneTitle: { fontFamily: fonts.bodySemibold, fontSize: 13.5, color: colors.ink },
  milestoneDescription: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted, lineHeight: 17 },
  achievementGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  achievementItem: { width: '47%', alignItems: 'center', gap: 6 },
  achievementTitle: { fontFamily: fonts.bodyMedium, fontSize: 12, color: colors.ink, textAlign: 'center' },
  achievementDate: { fontFamily: fonts.body, fontSize: 10.5, color: colors.muted },
  recList: { gap: 14 },
  recRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  recBody: { flex: 1, gap: 2 },
  recTitle: { fontFamily: fonts.bodySemibold, fontSize: 13.5, color: colors.ink },
  recDescription: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted, lineHeight: 17 },
})
